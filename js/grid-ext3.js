Ext.onReady(function(){

	//array contendo os dados que ser�o exibidos no grid
    var myData = [
        ['Maria','11-12345678','maria@provedor.com','01/02/1984'], 
		['Pedro','12-55698745','pedro@provedor.com','12/04/1983'], 
		['Jo�o','21-78542359','joao@provedor.com','23/05/1986'],
		['Tiago','27-25854567','tiago@provedor.com','07/01/1982'],
		['Carla','33-31595187','carla@provedor.com','30/10/1984'], 
		['Estela','21-98652938','estela@provedor.com','29/06/1985'], 
		['Lucas','71-87241548','lucas@provedor.com','25/11/1984'], 
		['Mariana','85-33984526','mariana@provedor.com','02/12/1983'] 
    ];

    //data store que l� os dados e possui sua descri��o - fields
    var store = new Ext.data.SimpleStore({
        fields: [
           'nome',
           'telefone',
           'email',
           {name: 'aniversario', type: 'date', dateFormat: 'd/m/Y'}           
        ]
    });

    //l� os dados
    store.loadData(myData);
    
    var sm = new Ext.grid.CheckboxSelectionModel();

    // cria o grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        sm: sm,
        columns: [
                  sm,
                  {header: "NOME", width: 170, sortable: true, dataIndex: 'nome'},
                  {header: "TELEFONE", width: 150, sortable: true, dataIndex: 'telefone'
                  },
                  {header: "EMAIL", width: 150, sortable: true, dataIndex: 'email'},
                  {header: "DATA NASC.", width: 100, sortable: true, dataIndex: 'aniversario',
                  	renderer: Ext.util.Format.dateRenderer('d/m/Y')}
              ],
        title: 'Grid Extjs 3',
        height:240,
        width:610,
		frame:true
    });
    
    grid.getSelectionModel().on('rowselect', function(sm, rowIdx,r){
		
	});	
    
    Ext.get('idSelecionados').on('click', function(){
    	var getData = grid.getSelectionModel().getSelections();
		var selecionados = 'Voc� selecionou os seguintes nomes: ';
		for (var i = 0 ; i < getData.length ;i++) {
			selecionados += getData[i].get('nome') + ' '
		}
		Ext.Msg.alert('Selecionados', selecionados);
   	});
    

    //div do grid
    grid.render('grid-simples');
});