/*!
 * Mars3D (MarsGIS for Cesium)三维地球平台  
 * 版本信息：v2.0.4, hash值: 864c14297cb733648877
 * 编译日期：2020-3-22 19:26:17     
 * 版权所有：Copyright by 火星科技 http://cesium.marsgis.cn
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cesium/Cesium"), require("@turf/turf"));
	else if(typeof define === 'function' && define.amd)
		define(["cesium/Cesium", "@turf/turf"], factory);
	else if(typeof exports === 'object')
		exports["mars3d"] = factory(require("cesium/Cesium"), require("@turf/turf"));
	else
		root["mars3d"] = factory(root["Cesium"], root["turf"]);
})(window,mars3d_init);