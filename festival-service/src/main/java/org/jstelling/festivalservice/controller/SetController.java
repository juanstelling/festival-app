package org.jstelling.festivalservice.controller;

import org.jstelling.festivalservice.model.Set;
import org.jstelling.festivalservice.service.SetService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sets")
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE})
public class SetController {

    private final SetService setService;

    public SetController(SetService setService) { this.setService = setService;}

    @GetMapping
    public List<Set> getSets() {return setService.findall();}

    @GetMapping
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Set get(@PathVariable Long id) {
        return setService.getById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Set create(@Validated @RequestBody final Set set) {
        return setService.createSet(set);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Set update(@PathVariable Long id, @Validated @RequestBody Set set) {
        return setService.updateSet(id, set);
    }

    @RequestMapping(value = "{id}" ,method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        setService.deleteSet(id);
    }
}
