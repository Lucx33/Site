const bcrypyjs = require('bcryptjs');

const hashPassword = async (pw) => {
    const salt = await bcrypy.genSalt(12);
    const hash = await bcrypy.hash(pw ,salt);
    console.log(hash);
}

hashPassword('123');

const login = async (pw, hashedPw) => {
    const result = await bcrypy.compare(pw, hashedPw);
    if(result){
        console.log("SUCESSO!")
    } else{
        console.log("ERRO!")
    }
}

login('123','$2b$12$3TJkCeb995JxNb8u7KUOc.W.T5Ws40IwbvnxY9AxTV3yI/hndluf6')