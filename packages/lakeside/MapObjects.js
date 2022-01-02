class LoadMapObjectsSingleton{
	createMapObject(x,y,z,rx,ry,rz,model){
		mp.objects.new(model, new mp.Vector3(x,y,z),{
			rotation:new mp.Vector3(rx,ry,rz)
		});
	}
	
	loadMapObjects(){
		//Bus
		this.createMapObject(429.9284,-665.0627,28.17,0,0,0,"prop_bollard_01a");
		this.createMapObject(428.6219,-663.4388,28.0473,0,0,0,"prop_bollard_01a");
		this.createMapObject(428.6241,-661.7975,27.9973,0,0,0,"prop_bollard_01a");
		this.createMapObject(428.6219,-660.0233,27.7973,0,0,0,"prop_bollard_01a");
		this.createMapObject(428.6005,-658.3182,27.67,0,0,0,"prop_bollard_01a");
		this.createMapObject(429.0184,-656.6506,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(429.8478,-655.2102,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(430.7677,-653.6944,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(431.5778,-652.244,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2177,-650.6019,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2439,-648.8832,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2674,-647.3409,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2472,-645.7759,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2413,-644.2762,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2585,-642.7093,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2555,-641.2728,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.235,-639.8232,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(432.2223,-638.3921,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(433.4482,-638.3881,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(434.6929,-638.3841,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(435.9188,-638.3801,27.69,0,0,0,"prop_bollard_01a");
		this.createMapObject(381.1709,-838.983,28.3037,0,0,1.2,"prop_busstop_04");
		this.createMapObject(133.7241,-879.2654,29.5037,0,0,70.97,"prop_busstop_04");
		this.createMapObject(16.1111,-950.3764,28.3537,0,0,-19.82,"prop_busstop_04");
		this.createMapObject(-311.775,-836.1705,30.6537,0,0,-10.55,"prop_busstop_04");
		this.createMapObject(-651.214,-905.5341,23.4037,-0.65,-2.9,90.5,"prop_busstop_04");
		this.createMapObject(-771.1561,-1147.0613,9.6,-0.475,0.1,121.1497,"prop_busstop_04");
		this.createMapObject(-504.6291,-1104.1479,22.8787,-1.9,5.45,163.3739,"prop_busstop_04");
		this.createMapObject(-212.6463,-1153.2867,22.0287,-1.9,0.25,180.9493,"prop_busstop_04");
		this.createMapObject(106.9085,-1041.3333,28.3537,-1.875,0,246.699,"prop_busstop_04");
		this.createMapObject(258.167,-1065.7908,28.3287,-1.875,0,181.1987,"prop_busstop_04");
		this.createMapObject(470.5762,-623.5825,27.5134,0,0,-97.1502,"prop_busstop_04");
	}
}
const loadMapObjectsSingleton=new LoadMapObjectsSingleton();
loadMapObjectsSingleton.loadMapObjects();