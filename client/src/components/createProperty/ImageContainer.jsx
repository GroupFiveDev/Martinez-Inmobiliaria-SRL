import React, { useEffect, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const ImageContainer = ({ form, setForm }) => {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);

  const SortableItem = ({ id, src, index }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({ id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className='relative w-fit flex justify-center items-center hover:contrast-50 contrast-none hover:cursor-pointer'
      >
        <p className='absolute text-white text-5xl font-bold'>
          <span className='text-stroke-black'>
            {index + 1}
          </span>
        </p>
        <img src={src} alt={`image ${index}`} className='w-24 h-24 cover' />
      </div>
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = images.findIndex(item => item.id === active.id);
      const newIndex = images.findIndex(item => item.id === over.id);

      const newImages = arrayMove(images, oldIndex, newIndex);
      const newFiles = arrayMove(Array.from(files), oldIndex, newIndex);

      setImages(newImages);
      setFiles(newFiles);
    }
  };

  const handleChange = (event) => {
    const fileList = event.target.files;
    setFiles(fileList);
    const selectedImages = Array.from(fileList).map((file, index) => ({
      id: `image-${index}`,
      src: URL.createObjectURL(file),
    }));
    setImages(selectedImages);
  };

  useEffect(() => {
    setForm({
      ...form,
      image: files,
      images: images
    });
  }, [images]);

  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900">Imagenes</label>
      <input 
        onChange={handleChange} 
        type="file" 
        multiple 
        id="image" 
        name="image" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
        required 
      />
      <div className="bg-[#847c7c21] mt-1 rounded-lg flex flex-wrap justify-center gap-2 py-5">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={images.map(img => img.id)} strategy={horizontalListSortingStrategy}>
            <div className="flex gap-2">
              {images?.map((image, index) => (
                <SortableItem 
                  key={image.id} 
                  id={image.id} 
                  src={image.src} 
                  index={index} 
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
};

export default ImageContainer;