import { useState, useEffect } from 'react';
import apiService from '../../services/apiService';

const ApiStatus = () => {
  const [apiStatus, setApiStatus] = useState({ isAvailable: true, message: 'API Conectada' });
  const [isReconnecting, setIsReconnecting] = useState(false);

  const checkStatus = () => {
    const status = apiService.getApiStatus();
    setApiStatus(status);
  };

  const handleReconnect = async () => {
    setIsReconnecting(true);
    await apiService.reconnectApi();
    checkStatus();
    setIsReconnecting(false);
  };

  useEffect(() => {
    // Verificar estado inicial
    checkStatus();
    
    // Verificar estado cada 30 segundos
    const interval = setInterval(checkStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed top-16 right-4 z-50 p-3 rounded-lg shadow-lg border-2 ${
      apiStatus.isAvailable 
        ? 'bg-green-100 border-green-400 text-green-800' 
        : 'bg-orange-100 border-orange-400 text-orange-800'
    }`}>
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${
          apiStatus.isAvailable ? 'bg-green-500' : 'bg-orange-500'
        } ${apiStatus.isAvailable ? 'animate-pulse' : ''}`}></div>
        
        <span className="text-sm font-medium">
          {apiStatus.message}
        </span>
        
        {!apiStatus.isAvailable && (
          <button
            onClick={handleReconnect}
            disabled={isReconnecting}
            className="ml-2 px-2 py-1 text-xs bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-50"
          >
            {isReconnecting ? '🔄' : '↻'}
          </button>
        )}
      </div>
      
      {!apiStatus.isAvailable && (
        <div className="mt-2 text-xs opacity-75">
          Los datos se obtienen localmente
        </div>
      )}
    </div>
  );
};

export default ApiStatus; 