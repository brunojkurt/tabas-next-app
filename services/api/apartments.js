export default (api) => {
  const show = async (id, onError, onSuccess) => {
    await api.get(`/apartments/${id}`)
      .then(res => {
        onSuccess(res)
      })
      .catch(err => {
        onError(err)
      })
  }

  return {
    show
  }  
}