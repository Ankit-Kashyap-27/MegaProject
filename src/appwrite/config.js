import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {

        try {
            return await this.databases.createDocument(

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {

                title,
                content,
                featuredImage,
                status,
                userId,
            }
            )
        } catch (error) {
            console.log('create post is making problem in config.js ')
        }

    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )

        } catch (error) {

        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

            )
            return true

        } catch (error) {

            console.log('delete post is making some problem')
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("setPost is making some problem")
       return false
        }
    }

    async getPosts(quries =[Query.equal("status","active")]){
try {
    return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        quries,
        
    )
} catch (error) {
    console.log("getposts is making some problem")
}
    }

    async uploadFile (file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId  ,
                 ID.unique(),
                 file,

            )

        } catch (error) {
           console.log('UploadFile is making some problam') 
           return false
        }
    }

    async deleteFile(fileId){
        try {
         await this.bucket.deleteFile( 
            conf.appwriteBucketId,
            fileId
         )
         return true
        } catch (error) {
            console.log('deletefile is making some problem')
        return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    getfileDownlode(fileId){
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()

export default service