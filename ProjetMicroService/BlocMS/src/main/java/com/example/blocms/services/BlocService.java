package com.example.blocms.services;

import com.example.blocms.entities.Bloc;
import com.example.blocms.repositories.BlocRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@AllArgsConstructor
@Service
public class BlocService {

    @Autowired
    BlocRepo blocRepo;

    public List<Bloc> retrieveBlocs() {
        return blocRepo.findAll();
    }


    public Bloc updateBloc(Long id, Bloc newBloc) {
        if (blocRepo.findById(id).isPresent()) {
            Bloc existingBloc = blocRepo.findById(id).get();
            existingBloc.setNomBloc(newBloc.getNomBloc());
            existingBloc.setCapaciteBloc(newBloc.getCapaciteBloc());

            return blocRepo.save(existingBloc);
        } else
            return null;
    }


    public Bloc addBloc(Bloc bloc) {
        return blocRepo.save(bloc);
    }


    public Bloc retrieveBloc(long idBloc) {
        return blocRepo.findById(idBloc).orElse(null);

    }

    public String deleteBloc(Long id) {
        if (blocRepo.findById(id).isPresent()) {
            blocRepo.deleteById(id);
            return "bloc supprimé";
        } else
            return "bloc non supprimé";
    }}
