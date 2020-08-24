package com.jimin.service;

import java.util.List;

import com.jimin.vo.MovieVO;
 
public interface MovieService {
    
    public List<MovieVO> selectMovie() throws Exception;
}
