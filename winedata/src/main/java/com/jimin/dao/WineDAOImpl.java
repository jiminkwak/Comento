package com.jimin.dao;

import java.util.List;


import javax.inject.Inject;
 
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
 
import com.jimin.vo.WineVO;
import com.jimin.vo.AvgVO;
import com.jimin.vo.FixedVolVO;
import com.jimin.vo.FreeTotalVO;
import com.jimin.vo.QualityVO;
 
@Repository
public class WineDAOImpl implements WineDAO {
 
    @Inject
    private SqlSession sqlSession;
    
    private static final String Namespace = "com.jimin.mybatis.sql.test";
    
    @Override
    public List<WineVO> selectWine() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectWine");
    }
    
    
    @Override
    public List<QualityVO> selectQuality() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectQuality");
    }
    
    
    @Override
    public List<AvgVO> selectAvg() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectAvg");
    }
    
    @Override
    public List<FreeTotalVO> selectFreeTotal() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectFreeTotal");
    }
    
   @Override
    public List<FixedVolVO> selectFixedVol() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectFixedVol");
    }
    
}