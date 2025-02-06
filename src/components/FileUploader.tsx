import { convertFileToUrl } from '@/lib/utils';
import UploadImg from "@/assets/icons/upload.svg"
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FileUploaderProps = {
    files: File[] | undefined;
    onChange: (files: File[]) => void;
  };
  
const FileUploader = ({files, onChange}: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border border-dashed border-primary bg-lightGray p-5'>
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <img 
          src={convertFileToUrl(files[0])}
          alt='uploaded image'
          className='max-h-[200px] w-fit overflow-hidden object-cover'
        />
      ) : (
        <>
          <img 
            src={UploadImg}
            alt='uploaded'
            className='w-12 h-fit'
          />
          
          <div className="file-upload_label">
            <p className="text-14-regular">
              <span className="text-green-500">
                Click to upload
              </span> or Drag 'n' drop
            </p>
            <p>SVG, PNG JPG or gif (max 800X400)</p>
          </div>

        </>
      )}
    </div>
  )
}

export  default FileUploader;