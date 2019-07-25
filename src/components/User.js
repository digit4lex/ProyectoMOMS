import React from 'react'




const User = () =>{
    let style = { 
                    nombre:{fontFamily: 'Montserra',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '22px',
                        lineHeight: '27px',
                        color: '#355E7E',
                        marginLeft:"100px"
                        },
                    img:{
                        width: '73.23px',
                        height: '73.23px',
                        left: '26.39px',
                        top: '80px',

                    },
                    edit:{
                        
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        lineHeight: '17px',
                        
                        
                    },
                    profession:{
                        width: '183px',
                        height: '28px',
                        left: '110px',
                        top: '130px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '16px',
                        lineHeight: '20px',

                    },
                    infoAdi:{
                        width: '190px',
                        height: '18px',
                        left: '30px',
                        top: '191px',
                        color: '#355E7E',

                    },
                    };
    return(
        <div>
              <div className="col">
                <p style={style.edit}>Editar</p>
                </div>
           
                <div className="col">
                    <img style={style.img} alt="" src="https://www.lapi.com.mx/image.ashx?s=57067&im=97321&t=p"></img>
                    </div>
                    <div className="col">

                    <h2 style={style.nombre}>Carmen Zavala</h2>
                    <p style={style.profession}>Psicóloga</p>
                    </div>
               
                    <div><p style={style.infoAdi}>Información adicional</p>
                    <p>Magíster en Recursos Humanos, inglés intermedio</p>
                    <p>Tipo de trabajo solicitado</p>
                    <p>Part time</p>
                </div>
    </div>
                
    )
}

export default User;