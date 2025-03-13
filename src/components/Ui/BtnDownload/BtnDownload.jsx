

export const BtnDownload = ({contenido, estilos}) => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CVRonaldPatiñoGuevara.pdf'; 
        link.download = 'CVRonaldPatiñoGuevara.pdf'; 
        
        link.click();
      };
    
      return (
        <div>
          <button className={estilos} onClick={handleDownload}>{contenido}</button>
        </div>
      );
  
}

