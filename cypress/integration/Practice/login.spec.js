import {Login} from '../Login/login'

describe('Verify the Login Page',()=>{

    let login = new Login()

    it.only('Verify the Valid Login',()=>{
        login.openPage()
        login.validLogin('standard_user', 'secret_sauce')
    })

    it('Validate the invalid login',()=>{
        login.openPage()
        login.invalidLogin('abcdefg', 'password123')
        
    })

    it('Validate logo', ()=>{
        login.openPage()
        login.validateLogo()
    })

})