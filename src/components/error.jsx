
            //children permite pasar multiples lienas de  codigo html
const error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center uppercase p-3 font-bold mb-3 rounded-md'>
      {children}
    </div>
  )
}

export default error