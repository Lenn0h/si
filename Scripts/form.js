$(document).ready(function()
        {
            $("#error").hide();
            $("#formulario").submit(function()
            {
                var mensaje=""; 
                var msjgood="";

                if($("#nombre").val().trim().length==0)
                { 
                    mensaje="Ingresa un nombre valido, por favor";
                }

                if($("#email").val().trim().length==0)
                {
                    mensaje="Ingresa un correo electronico valido, por favor";
                }
                if($('#password').val().trim().length<6 ||$('#password').val().trim().length>16){
                    
                    mensaje="Tu contraseña debe tener un minimo de 6 carácteres y un maximo de 16";
                }
                if($("#ciudad").val().trim().length==0)
                { 
                    mensaje="El campo ciudad está vacío";
                }
                if($("#telefono").val().trim().length<8)
                {
                    mensaje="Ingresa un número de telefono valido"
                }
                else
                {
                    msjgood="Registro completado con exito!"
                }
                if(mensaje !="")
                {
                    $("#error").html(mensaje); 
                    $("#error").show(); 
                    event.preventDefault(); 
                }

            });
        });