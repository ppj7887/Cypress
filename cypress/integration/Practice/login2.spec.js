import {Login} from '../Login/login1'

describe('Validate the login page', ()=>{

    let newLogin = new Login()

    it('TC 01', ()=>{
        newLogin.openPage()
        newLogin.validLogin('student', 'Password123')
    })

    it('TC 02', ()=>{
        newLogin.openPage()
        newLogin.invalidLogin('studen', 'password345')
    })

    it('TC 03', ()=>{
        newLogin.validateLogo()
    })
})
