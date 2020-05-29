const express=require('express');
const knex= require('knex');
const cors=require('cors');

const postgres=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '9o$TG7r35',
      database : 'bdbel'
    }
  });

postgres.select('id_usuario').from('usuarios').then(data=>console.log(data))
const app=express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res)=>{
    const {userID, userPIN}=req.body;
    let valida=false;
const valid=postgres('tarjeta').where({
      id_usuario:userID,
      pin:  userPIN
    }).then((use)=>{res.json(use)})
});

app.put('/', (req, res)=>{
  const {codOTP, userID}=req.body;
  postgres.where('id_usuario', '=', userID)
  .update({
    'codigo':codOTP
  })
})

  
 /* 
  where('id_usuario', '=', userID)
  .update(
    codigo,codOTP
  )*/

//knex('books').insert({title: 'Slaughterhouse Five'})


/*
app.post('/', (req, res)=>{
  const {inputcodOTP}=req.body;
  let valida=false;
const valid=postgres('tarjeta').where({
    id_usuario:userID,
    pin:  userPIN
  }).then((use)=>{res.json(use)})
});
*/
app.listen(3001, ()=>{
    console.log("app is running on port 3001")
});
