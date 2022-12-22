class App
{
    mario()
    {
        return("Hallo")
    }

    luigi()
    {
        return("ik ben thijs")
    }

    bwahaha()
    {
        return("en dit is een test")
    }

    optel(a,b)
    {
        let result = a + b
        return(result)
    }

    runApplication()
    {
        let a = this.hallo();
        let b = this.naam();
        let c = this.nog_iets();
        let d = this.optel(5,12);
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
    }
}

let app = new App
app.runApplication();