var btn = document.querySelector('.imcBtn');
var resp = document.querySelector('.resp');
var altura = document.querySelector('#altura');
var peso = document.querySelector('#peso');
var pBar = document.querySelector('.progressBar');
var magro = document.querySelector('.magreza');
var normal = document.querySelector('.normal');
var sobreP = document.querySelector('.sobrepeso');
var obeso = document.querySelector('.obesidade');
var obesoG = document.querySelector('.obesidadeGrave');
var nivelImc = document.querySelector('#nivel');
var valorImc = document.querySelector('#valorImc');
var title = document.querySelector('.title');
var message = document.querySelector('.mainMessage');

var magrezaText = 'De acordo com a faculdade de medicina de Winsconsin, Estados Unidos a Magreza ou falta de gordura corporal não esta ligada apenas a feitos estéticos e sim  perda de outros componentes químicos essenciais para o nosso corpo. Por isso essa condição pode vir a retratar diversas doenças como Artrite, Doenças cardivasculares, Doenças pulmonares, Depressão, além de outras doenças relacionadas'
var normalText = 'Para manter a saúde em dia devemos buscar sempre uma alimentação correta e balanceada, ou seja manter todos os nutrientes necessarios para suprir a necessidade do organismo e assim evitamos os riscos de futuras doenças e melhoramos nossa qualidade de vida.'
var sobrePesoText = 'Representando um risco maior para a saúde. Nesta causa, é imprescindível uma consulta com um especialista, pois pode estar relacionado à pressão alta, colesterol alto ou diabetes, podendo apontar até para o hipotireoidismo. Este é o seu índice? Se sim, é tempo de consultar um profissional, realizar exames e pensar em uma reeducação alimentar e exercícios físicos. Fonte: Unimed Fortaleza'
var obesidadeText = 'Este peso já representa risco elevado para as doenças supracitadas. Como em todos os casos, mas neste impreterivelmente, deve-se buscar um profissional especializado e receber as orientações e medidas adequadas para obter uma saúde equilibrada. Fonte: Unimed Fortaleza'
var obesidadeGraveText = 'O peso neste grau apresenta problemas extremamente graves e necessita de tratamento profissional com o máximo de recursos disponíveis, incluindo até cirurgia. Fonte: Unimed Fortaleza'

btn.onclick = () => {
    let p = Number(peso.value);
    let h = Number(altura.value);

    let valeuRegist = imcCalc(p, h);

    console.log(valeuRegist);

    //resp.innerHTML = imcCalc(p, h);
    progressBar(valeuRegist);
    showImc(valeuRegist);

}

function imcCalc(p, h) {
    let hConvert = h / 100
    let imc = p / (hConvert * hConvert);
    return imc.toFixed(2);
}

function showImc(x) {
    if (x < 18.5) {
        nivelImc.value = 'Magreza';
        valorImc.value = x;

        nivelImc.style.color = '#ff6b6b';
        nivelImc.style.borderBottomColor = '#ff6b6b';
        valorImc.style.color = '#ff6b6b';
        valorImc.style.borderBottomColor = '#ff6b6b';

        title.innerHTML = 'Riscos de Magreza Extrema';
        message.innerHTML = magrezaText;
    }
    if (x >= 18.5 && x <= 24.9) {
        nivelImc.value = 'Normal';
        valorImc.value = x;

        nivelImc.style.color = '#1dd1a1';
        nivelImc.style.borderBottomColor = '#1dd1a1';
        valorImc.style.color = '#1dd1a1';
        valorImc.style.borderBottomColor = '#1dd1a1';

        title.innerHTML = 'Benefícios de estar Saudável';
        message.innerHTML = normalText;
    }
    if (x >= 25 && x <= 29.9) {
        nivelImc.value = 'Sobrepeso';
        valorImc.value = x;

        nivelImc.style.color = '#feca57';
        nivelImc.style.borderBottomColor = '#feca57';
        valorImc.style.color = '#feca57';
        valorImc.style.borderBottomColor = '#feca57';

        title.innerHTML = 'Riscos do Sobrepeso';
        message.innerHTML = sobrePesoText;
    }
    if (x >= 30 && x <= 39.9) {
        nivelImc.value = 'Obesidade';
        valorImc.value = x;

        nivelImc.style.color = '#ff9f43';
        nivelImc.style.borderBottomColor = '#ff9f43';
        valorImc.style.color = '#ff9f43';
        valorImc.style.borderBottomColor = '#ff9f43';

        title.innerHTML = 'Riscos da Obesidade';
        message.innerHTML = obesidadeText;
    }
    if (x >= 40) {
        nivelImc.value = 'Obesidade Grave';
        valorImc.value = x;

        nivelImc.style.color = '#ee5253';
        nivelImc.style.borderBottomColor = '#ee5253';
        valorImc.style.color = '#ee5253';
        valorImc.style.borderBottomColor = '#ee5253';

        title.innerHTML = 'Riscos da Obesidade Grave';
        message.innerHTML = obesidadeGraveText;
    }
}

function progressBar(x) {
    if (x < 18.5) {
        pBar.style.height = '30px';
        pBar.style.backgroundColor = '#ff6b6b';

        magro.style.color = '#ff6b6b';
        magro.style.borderBottomColor = '#ff6b6b';

        //resets
        normal.style.color = '#8395a7';
        normal.style.borderBottomColor = '#8395a7';
        sobreP.style.color = '#8395a7';
        sobreP.style.borderBottomColor = '#8395a7';
        obeso.style.color = '#8395a7';
        obeso.style.borderBottomColor = '#8395a7';
        obesoG.style.color = '#8395a7';
        obesoG.style.borderBottomColor = '#8395a7';
    }
    if (x >= 18.5 && x <= 24.9) {
        pBar.style.height = '75px'
        pBar.style.backgroundColor = '#1dd1a1';

        normal.style.color = '#1dd1a1';
        normal.style.borderBottomColor = '#1dd1a1';

        //resets
        magro.style.color = '#8395a7';
        magro.style.borderBottomColor = '#8395a7';
        sobreP.style.color = '#8395a7';
        sobreP.style.borderBottomColor = '#8395a7';
        obeso.style.color = '#8395a7';
        obeso.style.borderBottomColor = '#8395a7';
        obesoG.style.color = '#8395a7';
        obesoG.style.borderBottomColor = '#8395a7';

    }
    if (x >= 25 && x <= 29.9) {
        pBar.style.height = '115px'
        pBar.style.backgroundColor = '#feca57';

        sobreP.style.color = '#feca57';
        sobreP.style.borderBottomColor = '#feca57';

        //resets
        magro.style.color = '#8395a7';
        magro.style.borderBottomColor = '#8395a7';
        normal.style.color = '#8395a7';
        normal.style.borderBottomColor = '#8395a7';
        obeso.style.color = '#8395a7';
        obeso.style.borderBottomColor = '#8395a7';
        obesoG.style.color = '#8395a7';
        obesoG.style.borderBottomColor = '#8395a7';
    }
    if (x >= 30 && x <= 39.9) {
        pBar.style.height = '155px'
        pBar.style.backgroundColor = '#ff9f43';

        obeso.style.color = '#ff9f43';
        obeso.style.borderBottomColor = '#ff9f43';

        //resets
        magro.style.color = '#8395a7';
        magro.style.borderBottomColor = '#8395a7';
        normal.style.color = '#8395a7';
        normal.style.borderBottomColor = '#8395a7';
        sobreP.style.color = '#8395a7';
        sobreP.style.borderBottomColor = '#8395a7';
        obesoG.style.color = '#8395a7';
        obesoG.style.borderBottomColor = '#8395a7';
    }
    if (x >= 40) {
        pBar.style.height = '215px'
        pBar.style.backgroundColor = '#ee5253';

        obesoG.style.color = '#ee5253';
        obesoG.style.borderBottomColor = '#ee5253';

        //resets
        magro.style.color = '#8395a7';
        magro.style.borderBottomColor = '#8395a7';
        normal.style.color = '#8395a7';
        normal.style.borderBottomColor = '#8395a7';
        sobreP.style.color = '#8395a7';
        sobreP.style.borderBottomColor = '#8395a7';
        obeso.style.color = '#8395a7';
        obeso.style.borderBottomColor = '#8395a7';
    }
}