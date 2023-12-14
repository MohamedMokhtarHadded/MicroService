package com.example.blocms.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Bloc implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long idBloc;
        private String nomBloc;
        private long capaciteBloc;


}
