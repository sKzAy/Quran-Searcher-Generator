"use client"
const randGen = ()=>{
    return Math.ceil(Math.random() * 6236) + 1;
}


const getSurah = async () => {
    const res = await fetch(`https://api.alquran.cloud/v1/ayah/5/en.asad`)
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    return await res.json()
}

const genhandleClick = async ()=>{
    const GetData = async(randGen)=>{
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randGen}/en.asad`)
        if (!res.ok){
            throw new Error('Throwing error')
        }
        return await response.json()
    }
    const ayat = await GetData()
}

