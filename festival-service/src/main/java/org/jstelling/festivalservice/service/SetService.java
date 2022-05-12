package org.jstelling.festivalservice.service;

import org.jstelling.festivalservice.model.Set;
import org.jstelling.festivalservice.repository.SetRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SetService {

    private final SetRepository setRepository;

    public SetService(SetRepository setRepository) { this.setRepository = setRepository;}

    public List<Set> findall() {return setRepository.findAll();}

    public Set getById(Long id) {
         var set = setRepository.findById(id);
        if (set.isPresent()) {
            return set.get();
        } else {
            throw new NoSuchElementException("Set doesn't exist");
        }
    }
    public Set createSet(final Set set) {
        return setRepository.saveAndFlush(set);
    }

    public Set updateSet(Long id, Set set) {
        if (setRepository.findById(id).isPresent()) {
            Set existingSet = setRepository.findById(id).get();
            BeanUtils.copyProperties(set, existingSet, "setId");
            return setRepository.saveAndFlush(existingSet);
        } else throw new NoSuchElementException();
    }
    public void deleteSet(Long id) {
        setRepository.deleteById(id);
    }
}
