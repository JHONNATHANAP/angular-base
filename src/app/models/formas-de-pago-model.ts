interface cuenta {
  tipo: { label: string; value: string | number };
  banco?: { label: string; value: string | number };
  rut?: string | number;
  numeroCuenta?: string | number;
  estado?: { label: string; value: string | number };
}

export interface IAppFormasDePago {
  cuentas: cuenta[];
  value?: string | number;
}
export class AppFormasDePago implements IAppFormasDePago {
  constructor(entity?: IAppFormasDePago) {
    this.cuentas = [{ tipo: { label: 'Pago presencial', value: -1 } }];
    this.value = -1;
    if (!entity) return;
    Array.from(Object.keys(entity)).map((e: string) => {
      const prop: string = e;
      this[prop] = entity[e] !== null ? entity[e] : this[e];
    });
  }
  cuentas: cuenta[];
  value?: string | number;
  label(cuenta: cuenta): string {
    return cuenta.banco && cuenta.numeroCuenta
      ? `${cuenta.banco.label} - ${cuenta.numeroCuenta} - ${cuenta.tipo.label}`
      : cuenta.tipo.label;
  }
  agregarCuenta(){
    
  }
}
