const Link = ({text,url}) => {
    return ( <a
        className="w-full text-white-600 h-full py-4 text-center border-2 border-white-900 bg-[F3BCC8]-600 font-medium text-xl hover:bg-[F1D4E5]-800 transition-all duration-700 rounded-md hover:text-white"
        href={url}
      >
        {text}
      </a>)
  }
  
  export default Link