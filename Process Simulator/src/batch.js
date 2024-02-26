import Process from "./process"

class Batch {
    constructor(process1 = null, process2 = null, process3 = null, process4 = null) {
      this.processes = []

      if(process1 != null && this.processes.length < 4 && process1 instanceof Process) 
        this.processes.push(process1)
      if(process2 != null && this.processes.length < 4 && process2 instanceof Process) 
        this.processes.push(process2)
      if(process3 != null && this.processes.length < 4 && process3 instanceof Process)
        this.processes.push(process3)
      if(process4 != null && this.processes.length < 4 && process4 instanceof Process) 
        this.processes.push(process4)

    }
  
    // Método para agregar un nuevo proceso al Batch
    getSize(){
      return this.processes.length
    }

    addProcess(process){
      if (this.getSize() >= 4) {
          throw new Error("ERROR ADDING PROCESS\nErrorType: Batch is full");
      }
  
      if (!this.isProcess(process)) {
          throw new Error("ERROR ADDING PROCESS\nErrorType: Invalid 'Process' Object");
      }
  
      this.processes.push(process);
    }
    
    isProcess(process){
      return process instanceof Process;
    }
    
    
  }
  
  export default Batch;