
const Sunucu_1 = "Knaves";
module.exports = {
    apps: [
        {
            name: `Operator`,
            namespace: "Ravgar_V13_Pub",
            script: "./Operator/main.js",
            watch: false
        },
        {
            name: `Statistics`,
            namespace: "Ravgar_V13_Pub",
            script: "./Statistics/main.js",
            watch: true
        },
        {
            name: `Fundamental`,
            namespace: "Ravgar_V13_Pub",
            script: "./Fundamental/main.js",
            watch: false
        },
    
    ]
};
