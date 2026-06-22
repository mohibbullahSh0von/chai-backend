import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET,
        });



async function uploadOnCloudinary(localFilePath) {
    try {
        if(!localFilePath) return null;


        const uploadInstance =  await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto',
        },
        ()=>{
        console.log("The file is successfully UPLODAED!!!")
        })
        console.log(uploadInstance.url);
        return uploadInstance;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the  upload got failed
        console.log(error);

        return null;
    }
}


export default uploadOnCloudinary;


