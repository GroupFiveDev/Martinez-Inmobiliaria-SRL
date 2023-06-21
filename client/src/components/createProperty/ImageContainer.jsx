import React, { useEffect, useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move';

const ImageContainer = ({ form, setForm }) => {

  const [images, setImages] = useState([]);
  const [files, setFiles] = useState()

  const SortableItem = SortableElement(({ value, index2 }) => {
    return (
      <div className='relative w-fit flex justify-center items-center hover:contrast-50 contrast-none hover:cursor-pointer'>
        <p className='absolute text-white text-5xl font-bold'>
          <span className='text-stroke-black'>
            {index2 + 1}
          </span>
        </p>
        <img src={value.src} alt={`image ${index2}`} className='w-24 h-24 cover' />
      </div>
    );
  });

  const SortableList = SortableContainer(({ items }) => {
    return (
      <ul className='flex gap-2'>
        {items?.map((e, i) => <SortableItem key={i} value={e} index={i} index2={i} />)}
      </ul>
    )
  })

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let imagesCopy = [...images]
    let filesCopy = [...files]
    imagesCopy = arrayMoveImmutable(imagesCopy, oldIndex, newIndex)
    filesCopy = arrayMoveImmutable(filesCopy, oldIndex, newIndex)
    const next = filesCopy[oldIndex].name;
    const prev = filesCopy[newIndex].name;

    filesCopy[newIndex].name = next;
    filesCopy[oldIndex].name = prev;

    console.log("prev", prev, "next", next);
    setImages(imagesCopy)
    setFiles(filesCopy)
  }

  const handleChange = (event) => {
    const fileList = event.target.files;
    setFiles(fileList)
    const selectedImages = Array.from(fileList).map(file => ({
      src: URL.createObjectURL(file),
    }));
    setImages(selectedImages);
  };

  useEffect(() => {
    setForm({
      ...form,
      image: files,
      images: images
    })
  }, [images])

  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900">Imagenes</label>
      <input onChange={handleChange} type="file" multiple id="image" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      <div className="bg-[#847c7c21] mt-1 rounded-lg flex flex-wrap justify-center gap-2 py-5">
        <SortableList items={images} onSortEnd={onSortEnd} axis={"x"} />
      </div>
    </>
  );
};

export default ImageContainer;