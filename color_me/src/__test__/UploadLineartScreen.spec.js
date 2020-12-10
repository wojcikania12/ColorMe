import React from "react";
import TestRenderer from "react-test-renderer";
import UploadLineartScreen from "../UploadLineartScreen.js";

describe("Upload Photo", () => {
	 let component;
	 let inst;
	 let not_choosed_color;
	 let cont;
	 component = TestRenderer.create(<UploadLineartScreen />).root; 
	 const instance = component.instance;
	 beforeEach(()=>{
	 	jest.spyOn(console, 'error').mockImplementation(() => {});
	 	
		component = TestRenderer.create(<UploadLineartScreen />).root; 
		inst = component.instance;
		not_choosed_color = {
	        	  r: '0',
			      g: '0',
			      b: '0',
			      a: '1',
	        }
	});
   
	describe("initialize",()=>{
	   test("selectedFile", () => {
	    	expect(inst.state.selectedFile).toBe(null);
	  });
	   test("base64 string", () => {
	    	expect(inst.state.base64).toBe("");
	  });
	   test("file upload state", () => {
	    	expect(inst.state.loaded).toBe(false);
	  });
	   test("colored result", () => {
	    	expect(inst.state.coloredResponse).toBe("");
	  });
	   test("color", () => {
	    	expect(JSON.stringify(instance.state.color)).toBe(JSON.stringify(not_choosed_color));
	  });
	   test("result without filter", () => {
	    	expect(inst.state.picWithoutFilter).toBe("");
	  });
	   test("filter color", () => {
	    	expect(inst.state.filterColor).toBe("#000000");
	  });
	   test("filter alpha", () => {
	    	expect(inst.state.alpha).toBe(1);
	  });
	   test("color picker", () => {
	    	expect(inst.state.displayColorPicker).toBe(false);
	  });


	})
	describe("show result pannel",()=>{
			test("result", ()=>{
				component = TestRenderer.create(<UploadLineartScreen />).root; 
				 const instance = component.instance;
				instance.setState({coloredResponse:"ll"})
				expect(component.findByProps({className: "resultPannel"}))
			})
			test("picker color", ()=>{
				component = TestRenderer.create(<UploadLineartScreen />).root; 
				 const instance = component.instance;
				instance.setState({coloredResponse:"ll", displayColorPicker:true})
				expect(component.findByProps({color: instance.state.color}))

			})

	})
});