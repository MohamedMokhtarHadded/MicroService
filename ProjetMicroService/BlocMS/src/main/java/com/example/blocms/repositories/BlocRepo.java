package com.example.blocms.repositories;

import com.example.blocms.entities.Bloc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlocRepo extends JpaRepository<Bloc, Long> {

    List<Bloc> findAll();
}
