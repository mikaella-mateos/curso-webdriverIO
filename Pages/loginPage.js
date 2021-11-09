import BasePage from '../Pages/basePage';

class LoginPage extends BasePage {
    //Web elements
    get login(){ return $('.login')}
    get email(){ return $('#email') }
    get password(){ return $('#passwd')}
    get botonLogin(){return $('#SubmitLogin')}
    get verificacion() {return $('.page-heading')}


    // Ingresar datos

    async ingresarDatos(){
        addStep(`Ingresar email y contraseña para loguearse`)
        await super.vaciarCampoYEnviarTexto(await this.email, "mm@mail.com");
        await super.vaciarCampoYEnviarTexto(await this.password, "mm1234");

    }
    async submit(){
        addStep(`Hacer click en el boton de login`)
        await super.clickearElemento(await this.botonLogin);
    }

    async logueado() {
        addStep(`Validar que estoy logueado`)
        return await (await this.verificacion).getText();
        }
}
export default new LoginPage();