package com.javainuse.entities.concretes;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.javainuse.entities.adapters.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "admins")
public class Admin extends User {
	@Column(name = "permision")
	public String permision;
	public Admin(String permision) {

		this.permision = permision;
	}

	public Admin() {

	}


	 @OneToMany(mappedBy = "admin")
	   private List<JobAdvertisement> jobAdvertisements;
	public String getPermision() {
		return permision;
	}

	public void setPermision(String permision) {
		this.permision = permision;
	}
	
}
