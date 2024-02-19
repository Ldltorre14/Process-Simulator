

class Batch {
    constructor(processes) {
      this.processes = processes;
    }
  
    // Método para agregar un nuevo proceso al Batch
    addProcess(process) {
      this.processes.push(process);
    }
  }
  
  export default Batch;