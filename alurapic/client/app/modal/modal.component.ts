import { Component, ElementRef, Output, Input, EventEmitter,AfterViewInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit{
    @Input() private titulo:string = 'Tem certeza?';
    @Input() private frase:string;
    @Input() estilo:string = 'btn-default';
    @Output() confirma = new EventEmitter();

    constructor(private _element:ElementRef){
        this._element = _element;
    }
    ngAfterViewInit() {
        $(this._element.nativeElement).dialog({
            title:this.titulo,
            autoOpen:false,
            resizable:false,
            modal:true,
            buttons:{
                cancelar:()=>{
                    $(this._element.nativeElement).dialog('close');
                },
                confirmar:()=>{
                    $(this._element.nativeElement).dialog('close');
                    this.confirma.emit(null);
                }
            }
        });
    }
    show(){
        $(this._element.nativeElement).dialog('open');
    }
}