const sql=require("mysql2")
require("dotenv").config()

const con=sql.createConnection(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
)

function getAllSponsers()
{
    return new Promise(function(success,reject)
{
    con.query(`select * from Sponsers`,function(err,rows)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(rows)
    }
})
})
}

function getSponser(name)
{
    return new Promise(function(success,reject)
    {
        con.query(`select * from Sponsers where country=?`,[name],function(err,rows)
    {
        if(err)
        {
            reject(err)
        }
        else
        {
            success(rows)
        }
    })
    })
}


function addSponser(co,sp)
{
    
    return new Promise(function(success,reject)
    {
        con.query(`insert into Sponsers values(?,?)`,[co,sp],function(err,rows)
    {
        if(err)
        {
            reject(err)
        }
        else
        {
            success(rows)
        }

    })


    })

}

function updateSponser(co)
{
    return new Promise(function(success,reject)
    {
        con.query(`update Sponsers set country=? sponser=? where country=?`,[co],function(err,rows)
    {

        if(err)
        {
            reject(err)
        }
        else
        {
            success(rows)
        }
    })

    })

}

function deleteSponser(co)
{
    return new Promise(function(success,reject)
    {
        con.query(`delete from Sponsers where country=?`,[co],function(err,rows)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                success(rows)
            }

        })

    })

}

module.exports={getAllSponsers,getSponser,addSponser,updateSponser,deleteSponser}