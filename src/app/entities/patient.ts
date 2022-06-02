import { v4 as uuid } from 'uuid';

type Gender = 'MALE' | 'FEMALE';

export class Patient {
  public readonly id: string;
  public name: string;
  public cpf: string;
  public rg: string;
  public phone: string;
  public email: string;
  public gender: Gender = 'MALE';
  public address: string;
  public district: string;
  public county: string;

  constructor(props: Omit<Patient, 'id'>, id?: string) {
    Object.assign(this, props);
    this.id = id ?? uuid();
  }
}
