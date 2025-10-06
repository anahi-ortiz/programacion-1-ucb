// ---------- CLASE PASAJERO ----------
class PASAJERO {
    nombre = "";
    edad = 0;
    genero = "";
    tipo_boleto = "";

    constructor(paramNombre, paramEdad, paramGenero, paramTipoBoleto) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.genero = paramGenero;
        this.tipo_boleto = paramTipoBoleto;
    }

    // SETTERS
    SetNombre(paramNombre) { this.nombre = paramNombre; }
    SetEdad(paramEdad) { this.edad = paramEdad; }
    SetGenero(paramGenero) { this.genero = paramGenero; }
    SetTipoBoleto(paramTipoBoleto) { this.tipo_boleto = paramTipoBoleto; }

    // GETTERS
    GetNombre() { return this.nombre; }
    GetEdad() { return this.edad; }
    GetGenero() { return this.genero; }
    GetTipoBoleto() { return this.tipo_boleto; }

    ToString() {
        return `👤 ${this.nombre} | ${this.edad} años | ${this.genero} | ${this.tipo_boleto}`;
    }
}

// ---------- CLASE BOTE RESCATE ----------
class BoteRescate {
    capacidadMaxima = 0;
    listaPasajeros = [];

    constructor(paramCapacidad) {
        this.capacidadMaxima = paramCapacidad;
        this.listaPasajeros = [];
    }

    // SETTERS
    SetCapacidadMaxima(paramCapacidad) { this.capacidadMaxima = paramCapacidad; }
    SetListaPasajeros(paramListaPasajeros) { this.listaPasajeros = paramListaPasajeros; }

    // GETTERS
    GetCapacidadMaxima() { return this.capacidadMaxima; }
    GetListaPasajeros() { return this.listaPasajeros; }

    AgregarPasajero(pasajero) {
        if (this.listaPasajeros.length < this.capacidadMaxima) {
            this.listaPasajeros.push(pasajero);
            return true;
        }
        return false;
    }

    MostrarPasajeros() {
        if (this.listaPasajeros.length === 0) return "<p>Sin pasajeros</p>";
        return this.listaPasajeros.map(p => p.ToString()).join("<br>");
    }
}


    // ---------- CREAR PASAJEROS FIJOS ----------
function GenerarPasajerosAleatorios(cantidad) {
    // Lista fija de pasajeros
    let pasajeros = [
        new PASAJERO("Ana", 25, "Femenino", "1ra Clase"),
        new PASAJERO("Carlos", 40, "Masculino", "2da Clase"),
        new PASAJERO("Bela", 8, "Femenino", "3ra Clase"),
        new PASAJERO("Rafa", 15, "Masculino", "1ra Clase"),
        new PASAJERO("María", 30, "Femenino", "2da Clase"),
        new PASAJERO("Luis", 12, "Masculino", "3ra Clase"),
        new PASAJERO("Elena", 5, "Femenino", "1ra Clase"),
        new PASAJERO("Pedro", 60, "Masculino", "2da Clase"),
        new PASAJERO("Lucía", 20, "Femenino", "3ra Clase"),
        new PASAJERO("Sofía", 10, "Femenino", "1ra Clase"),
        new PASAJERO("Jorge", 35, "Masculino", "2da Clase"),
        new PASAJERO("Valeria", 28, "Femenino", "3ra Clase"),
        new PASAJERO("Mateo", 7, "Masculino", "1ra Clase"),
        new PASAJERO("Isabela", 18, "Femenino", "2da Clase"),
        new PASAJERO("Anahi", 22, "Femenino", "3ra Clase")
    ];

    // Solo devuelve la cantidad solicitada
    return pasajeros.slice(0, cantidad);
}


function GenerarBotesAleatorios(cantidad) {
    let botes = [];
    for (let i = 0; i < cantidad; i++) {
        let capacidad = Math.floor(Math.random() * 5) + 3; // capacidad entre 3 y 7
        botes.push(new BoteRescate(capacidad));
    }
    return botes;
}

// ---------- ALGORITMO DE EVACUACIÓN ----------
function IniciarSimulacion() {
    let listaPasajeros = GenerarPasajerosAleatorios(15);
    let listaBotes = GenerarBotesAleatorios(3);

    // ORDEN DE PRIORIDAD
    listaPasajeros.sort((a, b) => {
        if (a.GetGenero() !== b.GetGenero()) return a.GetGenero() === "Femenino" ? -1 : 1;
        if (a.GetEdad() < 12 && b.GetEdad() >= 12) return -1;
        if (a.GetTipoBoleto() !== b.GetTipoBoleto()) return a.GetTipoBoleto().localeCompare(b.GetTipoBoleto());
        return 0;
    });

    let pasajerosFuera = [];
    let boteIndex = 0;

    listaPasajeros.forEach(p => {
        while (boteIndex < listaBotes.length && !listaBotes[boteIndex].AgregarPasajero(p)) {
            boteIndex++;
        }
        if (boteIndex >= listaBotes.length) {
            pasajerosFuera.push(p);
        }
    });

    MostrarResultado(listaBotes, pasajerosFuera);
}

// ---------- MOSTRAR RESULTADOS ----------
function MostrarResultado(listaBotes, pasajerosFuera) {
    const div = document.getElementById("resultado");
    div.innerHTML = "<h2>🚢 Resultado de la Evacuación</h2>";

    listaBotes.forEach((bote, i) => {
        div.innerHTML += `
        <div class="bote">
            <h3>🛶 Bote ${i + 1} (${bote.GetListaPasajeros().length}/${bote.GetCapacidadMaxima()})</h3>
            ${bote.MostrarPasajeros()}
        </div>`;
    });

    div.innerHTML += "<hr><h3>💀 Pasajeros que no alcanzaron bote:</h3>";
    if (pasajerosFuera.length === 0) {
        div.innerHTML += "<p>✅ Todos fueron evacuados exitosamente.</p>";
    } else {
        pasajerosFuera.forEach(p => {
            div.innerHTML += `- ${p.ToString()}<br>`;
        });
    }
}
