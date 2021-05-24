$(document).ready(function()
        {
            $("#error").hide();
            $("#formulario").submit(function()
            {
                var mensaje=""; 
                var ts=$("#rut-pas");
                var pas=$("#passrut");

                if($("#nombre").val().trim().length==0)
                { 
                    mensaje="Ingresa un nombre valido, por favor";
                }

                if($("#email").val().trim().length==0)
                {
                    mensaje="Ingresa un correo electronico valido, por favor";
                }
                if($("#ciudad").val().trim().length==0)
                { 
                    mensaje="El campo ciudad está vacío";
                }
                if(mensaje !="")
                {
                    $("#error").html(mensaje); 
                    $("#error").show(); 
                    event.preventDefault(); 
                }
            });
        });