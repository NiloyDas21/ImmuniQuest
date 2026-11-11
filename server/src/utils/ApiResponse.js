class ApiResponse{
    constructor(statuscode,data,message="sucess"){
        this.statuscode=statuscode,
        this.message=message,
        this.data = data,
        this.sucess<400
    }
}

export {ApiResponse}