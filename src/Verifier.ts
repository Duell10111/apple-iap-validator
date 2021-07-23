import { Options, productURL, VerifyResult, sandboxURL } from "./Structs"
import axios from 'axios'

export class Verifier {

    options : Options

    constructor(options : Options) {
        this.options = options
    }

    /**
     * Verify Receipt throw Apple's web interface
     * @param receipt Receipt to verify
     * @returns ValidResponse object
     * @throws Error if no valid response received
     */
    async verifiy(receipt : string) {
        const receiptEncoded = Buffer.from(receipt).toString('base64')

        const data = {
            ["receipt-data"]: receiptEncoded,
            password: this.options.appShared,
        }
        
        let result = await this.verifyReceipt(data)
        if(!result.useSandboxURL) {
            result = await this.verifyReceipt(data, true)
        }
        if(result.data) {
            return result.data
        }
        if(result.errorCode){
            throw new Error(`Received error http code : ${result.errorCode}`)
        }
        throw new Error("Unknown error happend")
    }

    private async verifyReceipt(data : any, useSandboxURL? : boolean) : Promise<{data?: VerifyResult, useSandboxURL? : boolean, errorCode? : number}> {
        const result = await axios.post(useSandboxURL ? sandboxURL : productURL, data)
        if(result.status == 200) {
            const data : VerifyResult = result.data
            console.log(data)
            if(data.status == 0){
                return {data : data}
            } else if(data.status == 21007) { //Use Sandbox URL
                return {useSandboxURL: true}
            } else {
                return {errorCode : data.status}
            }
        }
        return {}
    }

}