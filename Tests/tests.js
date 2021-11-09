import homePage from "../Pages/homePage";
import BasePage from "../Pages/basePage";
import busquedaPage from "../Pages/busquedaPage";
import DATOS from "../Datos/articulos";
import loginPage from "../Pages/loginPage";
import { expect } from "chai";
import categoryPage from "../Pages/categoryPage";
import itemPage from "../Pages/itemPage";


describe('automationpractice', function () {
  // Test para buscar item desde la barra de busqueda  
    DATOS.forEach(({articulo}) => {
       it(`Debería buscar ${articulo}`, async ()=> {
         await homePage.abrir('/');

        //Regresion visual
        await (await $(".search_query")).waitForDisplayed();
        expect(await browser.checkElement(await $(".search_query"), {
           /* opciones de configuración para el elemento */
            }),
            "Error: la barra de busqueda no coincide con la original"
          ).equal(0);

        //buscar articulo
         await homePage.buscar(articulo);
         await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
         await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
       });
    });


// Login
it('Deberia loguearse', async ()=> {
    await loginPage.abrir("/index.php?controller=authentication&back=my-account")
    await loginPage.ingresarDatos();
    await loginPage.submit();
    await expect (await loginPage.logueado()).to.equal("MY ACCOUNT");
});


//Seleccionar un producto de la HomePage
 it('Debería seleccionar un item', async ()=> {
    await homePage.abrir('/');
    await homePage.clickearItem();
    await expect(await itemPage.obtenerNombreItemSelec()).to.equal("Faded Short Sleeve T-shirts");
 });

 
// Filtrar resultados de una cateogria por color
it('Deberia filtrar resultados de una categoria por color', async ()=> {
   await homePage.abrir('/');
   await homePage.filtrarPorColor();
   await categoryPage.filtrarResultado();
});

//Agregar item a wishList
it('Deberia agregar item a wishlist', async ()=> {
    await loginPage.abrir("/index.php?controller=authentication&back=my-account")
    await loginPage.ingresarDatos;
    await loginPage.submit;

    await homePage.abrir('/');
    await homePage.clickearItem();
    await expect(await itemPage.obtenerNombreItemSelec()).to.equal("Faded Short Sleeve T-shirts");

    //lo agrega a la wishlist
    await itemPage.agregarAWishList();
});

});
