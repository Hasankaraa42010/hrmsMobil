	package com.javainuse.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;

import com.javainuse.entities.adapters.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")


public class Employee extends User {

    @Column(name = "name")
    private String name;

    @Column(name = "city")
    private String city;

    @Column(name = "job")
    private String job;

    @Column(name = "experience")
    private byte experience;

    @Column(name = "area")
    private String area;

    @Column(name = "permission")
    private boolean permission = true;

    // Boş constructor
    public Employee() {
        super();
    }

    // Constructor with parameters
    public Employee(String name, String city, String job, byte experience, String area, boolean permission) {
        super();
        this.name = name;
        this.city = city;
        this.job = job;
        this.experience = experience;
        this.area = area;
        this.permission = permission;
    }

    // Getter and setter methods
    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public byte getExperience() {
        return experience;
    }

    public void setExperience(byte experience) {
        this.experience = experience;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public boolean isPermission() {
        return permission;
    }

    public void setPermission(boolean permission) {
        this.permission = permission;
    }
}
