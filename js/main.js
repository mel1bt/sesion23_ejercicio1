window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
        var nom = document.getElementById("nombre").value;
        var edad = parseInt(document.getElementById("edad").value);
        var genero = document.querySelector('input[name="genero"]:checked').value;
        var resultado = document.getElementById("resultado");
        var prueba = new Persona(nom, edad, genero);
        resultado.innerHTML = document.write(prueba.presentacion());
       
    });
    
    function Persona(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.mayorDeEdad = (this.edad >= 18) ? true : false;
        this.presentacion = function(){
        return  "Hola, mi nombre es " + this.nombre + " tengo " + this.edad + " años y soy " + ( (this.mayorDeEdad) ? "mayor" : "menor")  + " de edad. ";      
        };
        }
});
