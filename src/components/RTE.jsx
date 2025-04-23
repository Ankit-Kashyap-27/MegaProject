import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'


export default RTE = ({ name, Control, lable, defaultVlaue = '' }) => {
    return (
        <div className='w-full'>
            {lable && <label className='inline-block mb-1 pl-1 text-gray-600'>{lable}</label>}
            <Controller
                name={name|| 'content'}
                control={Control}
                defaultValue={defaultVlaue}
                render={({ field:{onChange} }) => <Editor 
                initialValue={defaultVlaue}
                init={{
                    height: 500,
                    menubar: false,
                    initialValue: defaultVlaue,
                    plugins: [
                        'image',
                        'advList',
                        'autolink',
                        'lists',
                        'link',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'help', 
                        'wordcount',
                        'anchor',
                    ],
                    toolbar:
                        'undo redo | styleselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | link image | \
                        print preview media fullpage | insertdatetime | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}

                onChange={onChange}
                />}
                
            />
        </div>
    )
}


 