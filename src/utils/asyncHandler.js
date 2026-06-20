const asyncHandler = (requestHandler)=>{
    (req, res, next)=>{
         Promise.resolve(requestHandler(req, res, next)).catch(error=>next(error))
    }
}


export {asyncHandler}





//This is a higher order function which accepts function and use that in an async function
// tryCatch varient
// const asyncHandler = (fn)=>{
//     async (req, res, next)=>{
//         try {
//            await fn(req, res, next);
//         } catch (error) {
//            res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//            }) 
//         }
//     }
// }