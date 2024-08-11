import { Keypair } from "@solana/web3.js";

function generateKeyWithPrefix(prefix:string) {
    console.log(`Start the process`)
    let start = Date.now()
    let keypair = Keypair.generate();
    let count = 0
    while (!keypair.publicKey.toBase58().toLowerCase().startsWith(prefix)) {
        keypair = Keypair.generate();
        count++
        if (count % 10000 == 0)
            console.log(`It has been ${count} iterations`)
    }
    let end = Date.now()
    console.log(`It took ${count} iterations and ${((end - start) / 1000).toFixed(2)} seconds to find the public key that starts with '${prefix}': ${keypair.publicKey.toBase58()}`)

}

generateKeyWithPrefix('ola')

