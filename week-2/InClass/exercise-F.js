const loggin = (usuario, tipo) => {
    if ((usuario.charAt(0)=== usuario.charAt(0).toUpperCase()) && (usuario.length > 5 && usuario.length < 10 && usuario.charAt(0)=== usuario.charAt(0).toUpperCase()) && (tipo ==="admin" || tipo === "manager")){
    return "Usuario valido";
    }else {
        return "Usuario Invalido.";
    }
};

console.log(loggin("LitzyC", "admin"));
console.log(loggin("litzyc", "admin"));