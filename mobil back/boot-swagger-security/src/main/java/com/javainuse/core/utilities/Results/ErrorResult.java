package com.javainuse.core.utilities.Results;

public class ErrorResult extends Result{

	public ErrorResult() {
		super(false);
	} 
	
	public ErrorResult(String message) {
		super(false,message);
	} 

}
