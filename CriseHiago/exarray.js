let baseGerente = 0;
let minimoMerito = 20000;
let somabaseatual =0;
let verificabateumeta = 0;


 let baseUnidade = [
        132091.35,
        107262.59,
        24422.35,
        28889.29,
        148347.45,
        64635.84,
        30421.26,
        15000,
        22585.53
    ];
    let caixaAtual = [
        139204.36,
        99152.61,
        27806.93,
        35363.27,
        173191.01,
        61822.37,
        28306.43,
        46928.11,
        18644.67
    ];
    let pastasUnidades = [
        87,
        24,
        47,
        20,
        35,
        15,
        42,
        29,
        29
    ];
    let somabaseanterior =0;
    for (let index = 0; index <pastasUnidades.length;index++){
        somabaseanterior = somabaseanterior + baseUnidade[index];
        if (pastasUnidades[index] >= 20){
            somabaseatual = somabaseatual + caixaAtual[index];
        }
        if ( pastasUnidades[index] < 20){
            if ( caixaAtual[index] > baseUnidade [index] ){
                somabaseatual = somabaseatual + baseUnidade [index];
            }
            if (caixaAtual[index] < baseUnidade [index] ){
                somabaseatual = somabaseatual + caixaAtual [index]
            }
        }
    }

    verificabateumeta = somabaseatual - somabaseanterior;
    if (verificabateumeta >= minimoMerito){
        verificabateumeta = verificabateumeta / minimoMerito;
    } else {
        console.log ('TENTE OUTRA VEZ')
    }
console.log(somabaseanterior);
console.log(somabaseatual);
console.log(verificabateumeta);

