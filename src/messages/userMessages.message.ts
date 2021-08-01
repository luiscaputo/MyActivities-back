class userMessages{
  success(data: string){
    const res = {success: true, message: data};
  };
  error(data: string){
    const res = {success: false, message: data};
  }
}
export {userMessages}
