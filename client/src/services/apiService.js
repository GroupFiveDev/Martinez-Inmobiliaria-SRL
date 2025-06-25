import axios from 'axios';
import mockProperties from '../data/mockProperties.json';

// Variable para trackear si la API está disponible
let isApiAvailable = true;

// Función para verificar si la API está disponible
const checkApiHealth = async () => {
  try {
    await axios.get('/health', { timeout: 5000 });
    return true;
  } catch (error) {
    return false;
  }
};

// Simulador de delay para hacer más realista el fallback
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Función para filtrar y ordenar datos locales (similar a lo que hace la API)
const filterAndSortLocalData = (data, filterValue) => {
  let filteredData = [...data];

  // Aplicar filtros
  if (filterValue?.where?.type) {
    filteredData = filteredData.filter(item => item.type === filterValue.where.type);
  }

  // Aplicar ordenamiento
  if (filterValue?.order && filterValue.order.length > 0) {
    const [field, direction] = filterValue.order[0];
    filteredData.sort((a, b) => {
      let aValue = a[field];
      let bValue = b[field];

      // Manejar fechas
      if (field === 'createdAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (direction === 'ASC') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  return filteredData;
};

// Servicio principal
const apiService = {
  // GET /properties
  getProperties: async () => {
    try {
      console.log('🌐 Intentando conectar con la API...');
      const response = await axios.get('/properties', { timeout: 8000 });
      isApiAvailable = true;
      console.log('✅ API disponible - Datos obtenidos del servidor');
      return response;
    } catch (error) {
      console.warn('⚠️ API no disponible, usando datos locales');
      console.log('Error:', error.message);
      isApiAvailable = false;
      
      // Simular delay de red
      await delay(500);
      
      return {
        data: mockProperties,
        status: 200,
        statusText: 'OK (Local Data)',
      };
    }
  },

  // GET /properties/:id
  getPropertyById: async (id) => {
    try {
      console.log(`🌐 Obteniendo propiedad ${id} de la API...`);
      const response = await axios.get(`/properties/${id}`, { timeout: 8000 });
      isApiAvailable = true;
      console.log('✅ API disponible - Propiedad obtenida del servidor');
      return response;
    } catch (error) {
      console.warn(`⚠️ API no disponible, buscando propiedad ${id} en datos locales`);
      console.log('Error:', error.message);
      isApiAvailable = false;
      
      await delay(300);
      
      const property = mockProperties.find(p => p.id == id);
      if (property) {
        return {
          data: property,
          status: 200,
          statusText: 'OK (Local Data)',
        };
      } else {
        throw new Error(`Propiedad con id ${id} no encontrada en datos locales`);
      }
    }
  },

  // GET /properties/orderAndFilter/:filterValue
  getFilteredProperties: async (filterValue) => {
    try {
      console.log('🌐 Filtrando propiedades en la API...');
      const response = await axios.get(`/properties/orderAndFilter/${filterValue}`, { timeout: 8000 });
      isApiAvailable = true;
      console.log('✅ API disponible - Propiedades filtradas del servidor');
      return response;
    } catch (error) {
      console.warn('⚠️ API no disponible, filtrando datos locales');
      console.log('Error:', error.message);
      isApiAvailable = false;
      
      await delay(400);
      
      const parsedFilter = JSON.parse(filterValue);
      const filteredData = filterAndSortLocalData(mockProperties, parsedFilter);
      
      return {
        data: filteredData,
        status: 200,
        statusText: 'OK (Local Data)',
      };
    }
  },

  // POST /properties - Solo para mostrar que no está disponible en modo local
  createProperty: async (formData, config) => {
    try {
      console.log('🌐 Creando propiedad en la API...');
      const response = await axios.post('/properties', formData, { ...config, timeout: 10000 });
      isApiAvailable = true;
      console.log('✅ API disponible - Propiedad creada en el servidor');
      return response;
    } catch (error) {
      console.error('❌ No se puede crear propiedades en modo local');
      console.log('Error:', error.message);
      isApiAvailable = false;
      throw new Error('⚠️ Funcionalidad de creación no disponible en modo local. La API debe estar activa para crear propiedades.');
    }
  },

  // PATCH /properties/:id - Solo para mostrar que no está disponible en modo local
  updateProperty: async (id, data) => {
    try {
      console.log(`🌐 Actualizando propiedad ${id} en la API...`);
      const response = await axios.patch(`/properties/${id}`, data, { timeout: 8000 });
      isApiAvailable = true;
      console.log('✅ API disponible - Propiedad actualizada en el servidor');
      return response;
    } catch (error) {
      console.error('❌ No se puede actualizar propiedades en modo local');
      console.log('Error:', error.message);
      isApiAvailable = false;
      throw new Error('⚠️ Funcionalidad de actualización no disponible en modo local. La API debe estar activa para actualizar propiedades.');
    }
  },

  // DELETE /properties/:id - Solo para mostrar que no está disponible en modo local
  deleteProperty: async (id) => {
    try {
      console.log(`🌐 Eliminando propiedad ${id} de la API...`);
      const response = await axios.delete(`/properties/${id}`, { timeout: 8000 });
      isApiAvailable = true;
      console.log('✅ API disponible - Propiedad eliminada del servidor');
      return response;
    } catch (error) {
      console.error('❌ No se puede eliminar propiedades en modo local');
      console.log('Error:', error.message);
      isApiAvailable = false;
      throw new Error('⚠️ Funcionalidad de eliminación no disponible en modo local. La API debe estar activa para eliminar propiedades.');
    }
  },

  // Función para verificar el estado de la API
  getApiStatus: () => ({
    isAvailable: isApiAvailable,
    message: isApiAvailable ? 'API Conectada' : 'Modo Local Activo'
  }),

  // Función para forzar reconexión
  reconnectApi: async () => {
    console.log('🔄 Intentando reconectar con la API...');
    isApiAvailable = await checkApiHealth();
    if (isApiAvailable) {
      console.log('✅ Reconexión exitosa con la API');
    } else {
      console.log('❌ API sigue no disponible');
    }
    return isApiAvailable;
  }
};

export default apiService; 