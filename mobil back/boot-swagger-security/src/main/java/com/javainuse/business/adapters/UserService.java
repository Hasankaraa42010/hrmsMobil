package com.javainuse.business.adapters;

import com.javainuse.core.utilities.Results.DataResult;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.entities.adapters.User;

public interface UserService<T extends User> {
	Result signIn(T user);

	Result login(String email, String password);
}
